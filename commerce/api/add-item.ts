import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const DATABASE_ID = "d48d344caba14bbf862bc0f769b76a9f";
const notion = new Client({
  auth: "secret_3IyHaJCV0hCP4mtdmoZfzTUuZph9hqPZRBMMbLfIyb4",
});

async function addItem(name: string) {
  try {
    console.log("name", name);
    const response = await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
    });
    console.log(response);
  } catch (err) {
    console.error(JSON.stringify(err));
  }
}
type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const name = req.query;
  console.log("!!!!!!!!!!!");
  if (!name) {
    return res.status(400).json({ message: "Missing name" });
  }
  try {
    await addItem(String(name));
    res.status(200).json({ message: `Success ${name} ` });
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` });
  }
}
