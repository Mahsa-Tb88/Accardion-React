import { useState } from "react";
import style from "./accardion.module.css";
import { HiChevronUp, HiLockOpen } from "react-icons/hi";
// import { HiChevronDown } from "react-icons/hi";
const data = [
  {
    id: 1,
    title: "accardion one",
    text: {
      header: "text-one",
      body: "text one : Lorem ipsum dolor sit amet,LoremLorem ipsum dolor sit amet,LoremLorem ipsum dolor sit amet,LoremLorem ipsum dolor sit amet,LoremLorem ipsum dolor sit amet,LoremLorem ipsum dolor sit amet,LoremLorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortLorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,is eget.",
    },
  },
  {
    id: 2,
    title: "accardion two",
    text: {
      header: "text-two",
      body: "text two : Lorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,t. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,eget.",
    },
  },
  {
    id: 3,
    title: "accardion three",
    text: {
      header: "text-three",
      body: "text three : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,leo lobortis eget.",
    },
  },
];
function Accardion() {
  const [open, setOpen] = useState(null);
  const openshow = (id) => {
    setOpen(id == open ? null : id);
  };

  return (
    <div>
      {data.map((item) => {
        return (
          <AccordionItem
            item={item}
            key={item.id}
            open={open}
            openshow={openshow}
          >
            <h3>{item.text.header}</h3>
            <p>{item.text.body}</p>
          </AccordionItem>
        );
      })}
    </div>
  );
}

export default Accardion;
function AccordionItem({ item, openshow, open, children }) {
  return (
    <div
      className={`${style.accardion_item} ${
        open == item.id ? style.accardion_expand : ""
      }`}
    >
      <div
        className={style.accardion_item_header}
        onClick={() => openshow(item.id)}
      >
        <h3>{item.title}</h3>
        <span>
          <HiChevronUp
            style={{
              rotate: open == item.id ? "180deg" : "0deg",
              transition: "all 0.5s ease-out",
            }}
          />
        </span>
      </div>
      <p className={style.accardion_item_content}>{children}</p>
    </div>
  );
}
