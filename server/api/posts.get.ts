import { Client } from "@notionhq/client";
import type { Result } from "~/interfaces/user";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const posts_database_id = process.env.NOTION_DATABASE_ID;

let result: Result[] = [];

async function getData() {
  const data = await notion.databases.query({
    database_id: posts_database_id as string,
  });

  return data;
}

getData()
  .then((data) => {
    result = data.results as Result[]
  })

const getPosts = (results: Result[]) => {
  return results.map(result => {
    let desc = '';
    let credits = '';

    result.properties.description.rich_text.forEach(d => {
      desc += d.text.content
    })

    result.properties.credits.rich_text.forEach(c => {
      credits += c.text.link ? `<a href="${c.text.link.url}" target="_blank">${c.text.content}</a>` : c.text.content
    })

    return {
      id: result.id,
      title: result.properties.Name.title[0].text.content,
      image: result.properties.image.files[0].file.url,
      description: desc,
      credits: credits,
      tags: result.properties.Tags.multi_select
    }
  });
}

export default defineEventHandler(() => getPosts(result));
