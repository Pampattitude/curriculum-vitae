import { useEffect, useState } from "react";

import emailNormal from "/public/cntct/-__ -_ -- -_--.normal.png";
import emailHover from "/public/cntct/-__ -_ -- -_--.hover.png";
import emailActive from "/public/cntct/-__ -_ -- -_--.active.png";
import { LinkHTMLAttributes } from "preact/compat";

export const Contact = () => {
  const [content, setContent] = useState(<div />);

  useEffect(() => {
    setContent(
      <div className="contact">
        <div className="flex flex-col">
          <h2>Contact</h2>

          <address>92600 Asnières-sur-Seine</address>
          <div className="box-border relative h-[16px] mt-[4px]">
            <a
              id="-__.-_.--.-_--"
              href="mailto:guillaume.delahodde+spam@gmail.com"
              target="_blank"
              onClick={() => {
                const self = document.getElementById("-__.-_.--.-_--") as unknown as {href: string; setAttribute: (href: 'href', val: string) => void};
                self.setAttribute("href", self.href.replace(/\+spam/, "+job"));
              }}
              className="group"
            >
              <img
                className="absolute top-0 left-0 w-[251px] transition-opacity opacity-100 group-has-hover:opacity-0 group-has-active:opacity-0"
                src={emailNormal}
                alt="-__ -_ -- -_--"
              />
              <img
                className="absolute top-0 left-0 w-[251px] transition-opacity opacity-0 group-has-hover:opacity-100 group-has-active:opacity-0"
                src={emailHover}
                alt="-__ -_ -- -_--"
              />
              <img
                className="absolute top-0 left-0 w-[251px] transition-opacity opacity-0 group-has-hover:opacity-0 group-has-active:opacity-100"
                src={emailActive}
                alt="-__ -_ -- -_--"
              />
            </a>
          </div>
        </div>
      </div>,
    );
  });

  return content;
};
