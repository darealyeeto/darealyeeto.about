import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import IconCast from "../../public/favicon.svg?jsx";

export default component$(() => {
  return (
    <>
      <div class="center">
        <h1><IconCast style={{width: 100, height: 100}} /><br />darealyeeto</h1>
        <p>professional idiot</p>
        <p><a href="https://youtube.com/@darealyeeto" aria-label="YouTube">YouTube</a>
        <a href="https://discord.gg/yYHhNBdAmg" aria-label="Discord">Discord</a></p>
      </div>
    </>
  );
});


export const head: DocumentHead = {
  title: "darealyeeto",
  meta: [
    {
      name: "description",
      content: "professional idiot",
    },
  ],
};
