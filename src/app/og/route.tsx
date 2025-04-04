import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");

  const fontData = await fetch(
    new URL(`${req.nextUrl.origin}/fonts/NanumPenScript-Regular.ttf`)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: "url(https://gitcoder.me/og.jpg)",
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            fontSize: 150,
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            fontWeight: "bold",
            color: "#f9f4da",
            lineHeight: "150px",
            whiteSpace: "pre-wrap",
            fontFamily: "NanumPenScript",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "NanumPenScript",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
