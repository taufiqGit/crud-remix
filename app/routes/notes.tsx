import {
  redirect,
  unstable_composeUploadHandlers,
  unstable_createFileUploadHandler,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import styles from "~/styles/newNotes.css";

export async function action({ request }: ActionArgs) {
  // const body = await request.formData();
  // console.log(body.get("title"), "ini dta form");
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      maxPartSize: 5_000_000,
      file: ({ filename }) => {
        console.log(filename);

        return filename;
      },
    }),
    unstable_createMemoryUploadHandler()
  );

  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  const file = formData.get("image");
  const title = formData.get("title");
  console.log(file, title, "akkk");

  return redirect("/notes");
}

export default function NotePages() {
  return (
    <main>
      <h1 className="text-blue-500 text-xl font-semibold mt-3">This Is Form</h1>
      <Form
        className="flex flex-col w-64 gap-y-3 p-3"
        method="post"
        encType="multipart/form-data"
      >
        <input className="border-2" type="text" name="title" />
        <input className="border-2" type="file" name="image" />
        <button className="bg-gray-700 text-white" type="submit">
          Save
        </button>
      </Form>
    </main>
  );
}
