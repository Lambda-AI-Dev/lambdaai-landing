import React from "react";
export const Banner50DataSource = {
  wrapper: { className: "home-page-wrapper banner5" },
  page: { className: "home-page banner5-page" },
  childWrapper: {
    className: "banner5-title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <>
            <p>
              <b>Lambda AI</b>
            </p>
          </>
        ),
        className: "banner5-title k40vtjlgqe6-editor_css"
      },
      {
        name: "explain",
        className: "banner5-explain k40x8v1v0tf-editor_css",
        children: (
          <>
            <p>Affordable labeled data at scale</p>
          </>
        )
      },
      {
        name: "content",
        className: "banner5-content k40vtbnlt3m-editor_css",
        children: (
          <>
            <p>
              We leverage millions of online game players to help AI companies
              label data by replacing 30 seconds video ads with data labeling
              tasks.
            </p>
          </>
        )
      },
      {
        name: "button",
        className: "banner5-button-wrapper",
        children: {
          href: "mailto: support@lambdaai.dev",
          className: "banner5-button k40vsmqkk3b-editor_css",
          type: "primary",
          children: (
            <>
              <p>Contact Us</p>
            </>
          )
        }
      }
    ]
  },
  image: {
    className: "banner5-image",
    children:
      "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ"
  }
};
export const Footer00DataSource = {
  wrapper: { className: "home-page-wrapper footer0-wrapper" },
  OverPack: { className: "home-page footer0", playScale: 0.05 },
  copyright: {
    className: "copyright",
    children: (
      <>
        <p>
          ©2019 Lambda AI | Made with<span role="img"> ❤️</span>in Philadelphia
        </p>
      </>
    )
  }
};
