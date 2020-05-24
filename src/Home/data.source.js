import React from "react";
import { AC_DEV_AUTH_LINK, CC_DEV_AUTH_LINK } from "../AuthLinks";
export const Nav30DataSource = {
  wrapper: { className: "header3 home-page-wrapper jzih1dpqqrg-editor_css" },
  page: { className: "home-page" },
  logo: {
    className: "header3-logo jzjgnya1gmn-editor_css",
    children:
      "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-J8NSLj9rbsAAAAAAAAAAABkARQnAQ",
  },
  Menu: {
    className: "header3-menu",
    children: [
      {
        name: "item1",
        className: "header3-item",
        children: {
          href: AC_DEV_AUTH_LINK,
          children: [
            {
              children: (
                <span>
                  <p>For Data Requesters</p>
                </span>
              ),
              name: "text",
            },
          ],
        },
      },
      {
        name: "item2",
        className: "header3-item",
        children: {
          href: CC_DEV_AUTH_LINK,
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>For Developers</p>
                  </span>
                </span>
              ),
              name: "text",
              className: "kajbhb9wo2c-editor_css",
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: "header3-mobile-menu" },
};
export const Banner50DataSource = {
  wrapper: { className: "home-page-wrapper banner5" },
  page: { className: "home-page banner5-page" },
  childWrapper: {
    className: "banner5-title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <span>
              <span>
                <span>
                  <p>
                    <b>Lambda AI</b>
                  </p>
                </span>
              </span>
            </span>
          </span>
        ),
        className: "banner5-title kajaycgtbm-editor_css",
      },
      {
        name: "explain",
        className: "banner5-explain kajayj5v2c-editor_css",
        children: (
          <span>
            <span>
              <span>
                <p>Affordable Labeling for Data-Driven Businesses</p>
              </span>
            </span>
          </span>
        ),
      },
      {
        name: "content",
        className: "banner5-content kajayn6xjn6-editor_css",
        children: (
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <p>
                      We accelerate data-driven applications by making quality
                      labeled text affordable. We do so through ML-assisted
                      labeling, and innovative crowdsourcing.
                    </p>
                  </span>
                </span>
              </span>
            </span>
          </span>
        ),
      },
      {
        name: "button",
        className: "banner5-button-wrapper",
        children: {
          href: "#",
          className: "banner5-button kajb5w45v5c-editor_css",
          type: "primary",
          children: (
            <span>
              <span>
                <p>Contact Us</p>
              </span>
            </span>
          ),
        },
      },
    ],
  },
  image: {
    className: "banner5-image",
    children:
      "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ",
  },
};
export const Feature30DataSource = {
  wrapper: { className: "home-page-wrapper content3-wrapper" },
  page: { className: "home-page content3" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <span>
              <span>
                <p>
                  <b>Meet Our Products</b>
                </p>
              </span>
            </span>
          </span>
        ),
        className: "title-h1 kajb15gwlnm-editor_css",
      },
      {
        name: "content",
        className: "title-content kajb19n3fos-editor_css",
        children: (
          <span>
            <span>
              <span>
                <p>
                  Our API provides access to human-powered training data for
                  your model.
                </p>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title kajbs8phtit-editor_css",
            children: (
              <span>
                <span>
                  <span>
                    <p>E-Commerce</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: "content3-content kajbsgidzw7-editor_css",
            children: (
              <span>
                <span>
                  <p>
                    We can help you categorize products and their
                    characteristics to help you enable features such as image
                    search.
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: "block1",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title kajbs56r3e-editor_css",
            children: (
              <span>
                <span>
                  <p>Retail</p>
                </span>
              </span>
            ),
          },
          content: {
            className: "content3-content kajbrtvwaj-editor_css",
            children: (
              <span>
                <span>
                  <p>
                    Learning more about your customers? We label anything from
                    purchased products to customer behavior.
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: "block2",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title kajbs1tb5th-editor_css",
            children: (
              <span>
                <span>
                  <p>Advertising</p>
                </span>
              </span>
            ),
          },
          content: {
            className: "content3-content kajbrxke02-editor_css",
            children: (
              <span>
                <span>
                  <p>
                    Analyzing your marketing campaign? We can tag brand names,
                    customer reviews, and customer satisfaction.
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: "block3",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title kajbt2dj62n-editor_css",
            children: (
              <span>
                <span>
                  <p>Entertainment</p>
                </span>
              </span>
            ),
          },
          content: {
            className: "content3-content kajbt67997a-editor_css",
            children: (
              <span>
                <span>
                  <p>
                    Moderating your site’s user generated data? We classify
                    content type, potential copyright infringement and more.
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: "block4",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title kajbsn98uul-editor_css",
            children: (
              <span>
                <span>
                  <p>Internet of Things</p>
                </span>
              </span>
            ),
          },
          content: {
            className: "content3-content kajbskpqbro-editor_css",
            children: (
              <span>
                <span>
                  <p>
                    Working on an IoT sensor? We can work with you to create
                    training sets to help your sensor “see” the world.
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: "block5",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title kajbsz5vxrn-editor_css",
            children: (
              <span>
                <span>
                  <p>Research</p>
                </span>
              </span>
            ),
          },
          content: {
            className: "content3-content kajbsvjghd-editor_css",
            children: (
              <span>
                <span>
                  <p>
                    Need a new dataset to validate your research? We deliver
                    industry grade data for academic researchers globally.
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <span>
              <span>
                <p>
                  <b>Why Lambda AI?</b>
                </p>
              </span>
            </span>
          </span>
        ),
        className: "kajb7y8zjem-editor_css",
      },
    ],
  },
  childWrapper: {
    className: "content0-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png",
            },
            {
              name: "title",
              className: "content0-block-title kajbtu244h-editor_css",
              children: (
                <span>
                  <p>5x Cheaper</p>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <span>
                    <p>
                      We charge $0.075 / image, which is 5x Cheaper than
                      industry leaders (Amazon mTurk, Scale).
                    </p>
                  </span>
                </span>
              ),
              className: "kajbtxlsr5e-editor_css",
            },
          ],
        },
      },
      {
        name: "block1",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png",
            },
            {
              name: "title",
              className: "content0-block-title kajbtot0sgj-editor_css",
              children: (
                <span>
                  <span>
                    <p>&gt; 97% Accuracy</p>
                  </span>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <span>
                    <p>
                      We promise top industry grade quality (97%) on your image
                      data to ensure your model’s success.
                    </p>
                  </span>
                </span>
              ),
              className: "kajbtf275z-editor_css",
            },
          ],
        },
      },
      {
        name: "block2",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png",
            },
            {
              name: "title",
              className: "content0-block-title kajbtl3tz0k-editor_css",
              children: (
                <span>
                  <span>
                    <p>3-Weeks Turnaround</p>
                  </span>
                </span>
              ),
            },
            {
              name: "content",
              children: (
                <span>
                  <span>
                    <p>We deliver your dataset fully labeled in 3 weeks.</p>
                  </span>
                </span>
              ),
              className: "kajbti092gl-editor_css",
            },
          ],
        },
      },
    ],
  },
};
export const Teams10DataSource = {
  wrapper: { className: "home-page-wrapper teams1-wrapper" },
  page: { className: "home-page teams1" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <span>
              <p>
                <b>We are Proudly Backed By</b>
              </p>
            </span>
          </span>
        ),
        className: "kajbf0z3tz9-editor_css",
      },
    ],
  },
  block: {
    className: "block-wrapper",
    children: [
      {
        name: "block0",
        className: "block",
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: "image",
              className: "teams1-image",
              children: "https://i.ibb.co/fprDDs0/download-copy.png",
            },
          ],
        },
      },
      {
        name: "block1",
        className: "block",
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: "image",
              className: "teams1-image",
              children:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlaqePWRaA8qjVGcs3PH0pg6cvwDF7lUtKsc_qH3Vm85TWwPaC",
            },
          ],
        },
      },
      {
        name: "block2",
        className: "block",
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: "image",
              className: "teams1-image",
              children:
                "https://entrepreneurship.wharton.upenn.edu/wp-content/uploads/2017/11/VIP-V-circle-200-x-200.png",
            },
          ],
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2 },
  block: {
    className: "home-page",
    gutter: 0,
    children: [
      {
        name: "block0",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          className: "logo kajbuq2w7ws-editor_css",
          children: (
            <span>
              <span>
                <p>Lambda AI</p>
              </span>
            </span>
          ),
        },
        childWrapper: {
          className: "slogan",
          children: [
            {
              name: "content0",
              children: (
                <span>
                  <span>
                    <p>
                      Affordable Labeling for Data-Driven Businesses
                      <br />
                    </p>
                  </span>
                </span>
              ),
              className: "kajbuupk9xj-editor_css",
            },
          ],
        },
      },
      {
        name: "block1",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <span>
              <span>
                <p>Products</p>
              </span>
            </span>
          ),
          className: "kajbuy3nask-editor_css",
        },
        childWrapper: {
          children: [
            {
              name: "link0",
              href: "#",
              children: (
                <span>
                  <span>
                    <p>Text Classification</p>
                  </span>
                </span>
              ),
              className: "kajbv1gc7k-editor_css",
            },
            {
              name: "link1",
              href: "#",
              children: (
                <span>
                  <span>
                    <span>
                      <p>Sentiment Analysis</p>
                    </span>
                  </span>
                </span>
              ),
              className: "kajbv4wf6p-editor_css",
            },
            {
              name: "link2",
              href: "#",
              children: (
                <span>
                  <span>
                    <p>Intent Classification</p>
                  </span>
                </span>
              ),
              className: "kajbvaan0ar-editor_css",
            },
            {
              name: "link3",
              href: "#",
              children: (
                <span>
                  <span>
                    <p>Translation Comparison</p>
                  </span>
                </span>
              ),
              className: "kajbvdzko0r-editor_css",
            },
          ],
        },
      },
      {
        name: "block2",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <span>
              <span>
                <p>About</p>
              </span>
            </span>
          ),
          className: "kajbvp02qw-editor_css",
        },
        childWrapper: {
          children: [
            {
              href: "#",
              name: "link0",
              children: "FAQ",
              className: "kajbvs3inzs-editor_css",
            },
            {
              href: "#",
              name: "link1",
              children: (
                <span>
                  <span>
                    <p>Contact Us</p>
                  </span>
                </span>
              ),
              className: "kajbvwv8b0g-editor_css",
            },
          ],
        },
      },
      {
        name: "block3",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          children: (
            <span>
              <span>
                <p>Resources</p>
              </span>
            </span>
          ),
          className: "kajbw07kn4s-editor_css",
        },
        childWrapper: {
          children: [
            {
              href: "#",
              name: "link0",
              children: (
                <span>
                  <span>
                    <p>For Developers</p>
                  </span>
                </span>
              ),
              className: "kajbw3uv45-editor_css",
            },
            {
              href: "#",
              name: "link1",
              children: (
                <span>
                  <span>
                    <p>For Data Requesters</p>
                  </span>
                </span>
              ),
              className: "kajbw786ey7-editor_css",
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright kajbn88fos-editor_css",
    children: (
      <span>
        <span>
          © 2020 Lambda AI | Made with ❤️ in Philly
          <br />
        </span>
      </span>
    ),
  },
};
