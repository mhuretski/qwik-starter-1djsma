import type { JSXOutput, NoSerialize, StreamWriter } from '@builder.io/qwik';
import {
  component$,
  SSRStream,
  createContextId,
  useContext,
  useContextProvider,
} from '@builder.io/qwik';
import { QwikCityProvider } from '@builder.io/qwik-city';
import { renderToString } from '@builder.io/qwik/server';
import { manifest } from '@qwik-client-manifest';
import type { RenderToStreamOptions } from '@builder.io/qwik/server';
import {CartCounter} from "~/components/cart-counter";

export type StreamOptions = RenderToStreamOptions;

export const StreamOptionsContext = createContextId<{
  opts: NoSerialize<StreamOptions>;
}>('stream-options');

export const useStreamOptionsContextProvider = (
  opts?: NoSerialize<StreamOptions>
) => {
  useContextProvider(StreamOptionsContext, { opts });
};

const useStreamOptions = () => {
  const { opts } = useContext(StreamOptionsContext);

  return opts;
};

const CompWrapper = component$(() => {
    return (
        <>
            <CartCounter number={0} />
            <div>wrapped</div>
            <CartCounter number={1} />
            INJECT_HERE
            <CartCounter number={2} />
            <div>wrapped</div>
            <CartCounter number={3} />
        </>
    );
});

export default component$(() => {
  return (
    <>
      <CartCounter number={4} />
      <div>out of stream</div>
      <CartCounter number={5} />
      <Stream data={{ slot1: <CartCounter number={6} />, slot2: <CompWrapper /> }} />
      <CartCounter number={8} />
      <div>out of stream</div>
      <CartCounter  number={9} />
    </>
  );
});

const Stream = component$<{ data: {slot1: JSXOutput, slot2: JSXOutput} }>(({ data: {slot1, slot2} }) => {
  const options = useStreamOptions();

  return (
    <>
      <SSRStream>
        {async (stream: StreamWriter) => {
          stream.write('<div>in stream</div>');

          const editedManifest = manifest || options?.manifest;

            const renderedWrapperNode = await renderToString(
                <QwikCityProvider>{slot2}</QwikCityProvider>,
                {
                    ...options,
                    manifest: editedManifest,
                    containerTagName: 'div',
                    qwikLoader: {
                        include: 'never',
                    },
                }
            );
           const [first, second] = renderedWrapperNode.html.split('INJECT_HERE')

          const renderedNode = await renderToString(
            <QwikCityProvider>{slot1}</QwikCityProvider>,
            {
              ...options,
              manifest: editedManifest,
              containerTagName: 'div',
              qwikLoader: {
                include: 'never',
              },
            }
          );
          stream.write(first + renderedNode.html + second);

          stream.write('<div>in stream</div>');
        }}
      </SSRStream>
    </>
  );
});
