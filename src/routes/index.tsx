import type { JSXOutput, NoSerialize, StreamWriter } from '@builder.io/qwik';
import {
  component$,
  Slot,
  SSRStream,
  createContextId,
  useContext,
  useContextProvider,
} from '@builder.io/qwik';
import { QwikCityProvider } from '@builder.io/qwik-city';
import { renderToString } from '@builder.io/qwik/server';
import { manifest } from '@qwik-client-manifest';
import type { RenderToStreamOptions } from '@builder.io/qwik/server';

export type StreamOptions = RenderToStreamOptions;

export const StreamOptionsContext = createContextId<{
  opts: NoSerialize<StreamOptions>;
}>('stream-options');

export const useStreamOptionsContextProvider = (
  opts?: NoSerialize<StreamOptions>
) => {
  useContextProvider(StreamOptionsContext, { opts });
};

const Counter = component$(() => {
  return <div>counter</div>;
});

const useStreamOptions = () => {
  const { opts } = useContext(StreamOptionsContext);

  return opts;
};

export default component$(() => {
  return (
    <>
      <div>out of stream</div>
      <Stream slot={<Counter />} />
      <div>out of stream</div>
    </>
  );
});

const Stream = component$<{ slot: JSXOutput }>(({ slot }) => {
  const options = useStreamOptions();

  return (
    <>
      <SSRStream>
        {async (stream: StreamWriter) => {
          stream.write('<div>in stream</div>');

          const editedManifest = manifest || options?.manifest;

          const renderedNode = await renderToString(
            <QwikCityProvider>{slot}</QwikCityProvider>,
            {
              ...options,
              manifest: editedManifest,
              containerTagName: 'div',
              qwikLoader: {
                include: 'never',
              },
            }
          );
          stream.write(renderedNode.html);

          stream.write('<div>in stream</div>');
        }}
      </SSRStream>
    </>
  );
});
