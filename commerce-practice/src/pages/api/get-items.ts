import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const DATABASE_ID = "d48d344caba14bbf862bc0f769b76a9f";
const notion = new Client({
  auth: "secret_3IyHaJCV0hCP4mtdmoZfzTUuZph9hqPZRBMMbLfIyb4",
});

async function getItems() {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      sorts: [
        {
          property: "Price",
          direction: "ascending",
        },
      ],
    });
    console.log(response);
    return response;
  } catch (err) {
    console.error(JSON.stringify(err));
  }
}
type Data = {
  items?: any;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await getItems();
    res.status(200).json({ items: response?.results, message: `Success` });
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` });
  }
}
