"use server";

export const fetchMargonemHtml = async () => {
  const response = await fetch("https://margonem.pl");
  const html = await response.text();
  return html;
};
