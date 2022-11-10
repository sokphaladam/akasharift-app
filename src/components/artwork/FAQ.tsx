import React from "react";
import { BlockContent } from "../BlockContent";
import { Accordion } from "react-bootstrap";

export function FAQ() {
  const items = [
    {
      label: "How to Create an FAQ Page",
      items: [
        {
          label: "Use service data to identify your most common questions.",
        },
        {
          label: "Decide how you'll organize the FAQ page.",
        },
        {
          label: "Include space for live support options.",
        },
        {
          label: "Design your FAQ page.",
        },
      ],
    },
    {
      label: "FAQ Page Design",
      items: [
        {
          label: "Write clear and concise pages.",
        },
        {
          label: "Regularly update each page.",
        },
      ],
    },
    {
      label: "FAQ Page Examples",
      items: [
        {
          label: "Include a search bar.",
        },
        {
          label: "Organize questions by category.",
        },
      ],
    },
  ];

  return (
    <BlockContent title="FAQ" id="faq">
      <div style={{ marginTop: 25 }}>
        <Accordion defaultActiveKey="0" style={{ backgroundColor: "#7d2e2e" }}>
          {items.map((x, i) => {
            return (
              <Accordion.Item
                eventKey={i + ""}
                key={i}
                style={{ backgroundColor: "#7d2e2e" }}
              >
                <Accordion.Header style={{ backgroundColor: "#7d2e2e" }}>
                  {x.label}
                </Accordion.Header>
                <Accordion.Body>
                  <ul style={{ paddingLeft: "1rem", textAlign: "left" }}>
                    {x.items.map((y, j) => {
                      return (
                        <li key={j} style={{ padding: ".5rem" }}>
                          {y.label}
                        </li>
                      );
                    })}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </BlockContent>
  );
}
