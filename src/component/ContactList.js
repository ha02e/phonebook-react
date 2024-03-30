import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const keyword = useSelector((state) => state.keyword);

  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      let filterList = contactList.filter((item) =>
        item.name.includes(keyword)
      );
      setFilteredList(filterList);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <div>
      <SearchBox />
      {filteredList.map((item, idx) => (
        <ContactItem item={item} key={idx} />
      ))}
    </div>
  );
};

export default ContactList;
