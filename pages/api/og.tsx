import React from "react";
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import Image from "next/image";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "Shrey Bhadiyadara";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            position: "relative",
          }}
        >
          {/* Profile Image */}
          <Image
            src="https://shrey.vercel.app/Shrey-Bhadiyadara.png"
            alt="Shrey Bhadiyadara"
            width={200}
            height={200}
            style={{
              borderRadius: "50%",
              marginBottom: 20,
            }}
          />

          {/* Title */}
          <div
            style={{
              fontSize: 60,
              fontWeight: "bold",
              color: "#000",
              textAlign: "center",
              marginBottom: 10,
              padding: "0 20px",
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 30,
              color: "#666",
              textAlign: "center",
              padding: "0 20px",
            }}
          >
            Software Engineer • AI/ML • Full Stack Developer
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
