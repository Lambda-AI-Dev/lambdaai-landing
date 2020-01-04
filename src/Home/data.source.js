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
        className: "banner5-title k41nxvzhkps-editor_css"
      },
      {
        name: "explain",
        className: "banner5-explain k41ny2gzoy-editor_css",
        children: (
          <>
            <p>Earn more with your games</p>
          </>
        )
      },
      {
        name: "content",
        className: "banner5-content k41ny89rs6-editor_css",
        children: (
          <>
            <p>
              We help game developers earn more by connecting high value,
              bite-size tasks from AI researchers with millions of online game
              players.
            </p>
          </>
        )
      },
      {
        name: "button",
        className: "banner5-button-wrapper",
        children: {
          href: "mailto: support@lambdaai.dev",
          className: "banner5-button k41ny9wxpb9-editor_css",
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
export const Feature50DataSource = {
  wrapper: { className: "home-page-wrapper content7-wrapper" },
  page: { className: "home-page content7" },
  OverPack: {},
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <>
            <p>
              What can <b>Lambda AI</b> do for you
            </p>
          </>
        ),
        className: "title-h1 k41pipnxcs-editor_css"
      }
    ]
  },
  tabsWrapper: { className: "content7-tabs-wrapper" },
  block: {
    children: [
      {
        name: "block0",
        tag: {
          className: "content7-tag",
          text: {
            children: (
              <>
                <p>For Developers</p>
              </>
            ),
            className: "content7-tag-name k41pj7ijico-editor_css"
          },
          icon: { children: "code" }
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text k41pjnaddrt-editor_css",
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h3>Get Paid More</h3>
                  <p>
                    Simple data labeling tasks yields a fivefold increase in revenue 
                    when compared to traditional ad sources.
                  </p>
                  <br />
                  <h3>Better User Experience</h3>
                  <p>
                    Users have autonomy when choosing to complete tasks or wait for 
                    a timer, giving them control over the gaming experience.
                  </p>
                  <br />
                  <h3>Easy Integration</h3>
                  <p>
                    Lambda AI offers a straightforward setup to allow developers to 
                    get set up and paid in minutes.
                  </p>
                </span>
              </>
            )
          },
          img: {
            className: "content7-img",
            children:
              "https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png",
            md: 10,
            xs: 24
          }
        }
      },
      {
        name: "block1",
        tag: {
          className: "content7-tag",
          icon: { children: "global" },
          text: {
            className: "content7-tag-name k41pjcs3o1-editor_css",
            children: (
              <>
                <p>For AI Companies</p>
              </>
            )
          }
        },
        content: {
          className: "content7-content",
          text: {
            className: "content7-text k41pkkt6tc-editor_css",
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h3>Affordable Labeled Data</h3>
                  <p>
                    Lambda AI allows companies and academia to quickly and 
                    cheaply get labeled image classification data.
                  </p>
                  <br />
                  <h3>API and Done</h3>
                  <p>
                    Lambda AI only requires the data via an API call so you 
                    can integrate labeled data directly into your workflow.
                  </p>
                  <br />
                  <h3>Quality Control</h3>
                  <p>
                    We promise top industry-standard rates of quality on all 
                    image classification data to ensure your model’s success.
                  </p>
                </span>
              </>
            )
          },
          img: {
            className: "content7-img",
            md: 10,
            xs: 24,
            children:
              "https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png"
          }
        }
      }
    ]
  }
};
export const Footer00DataSource = {
  wrapper: { className: "home-page-wrapper footer0-wrapper" },
  OverPack: { className: "home-page footer0", playScale: 0.05 },
  copyright: {
    className: "copyright",
    children: (
      <>
        <span>©2020 Lambda AI | Made with ❤️ in Philly</span>
      </>
    )
  }
};
