import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(() => {
    const active_tab = localStorage.getItem("activeTab");
    return active_tab ? JSON.parse(active_tab) : 0;
  });
  const tabs = [
    {
      id: 0,
      title: "Tab 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed ex in nisl tincidunt rhoncus vitae eget ligula. Suspendisse gravida, augue eu sollicitudin gravida, velit elit condimentum lectus, sed rhoncus odio dui nec odio. Fusce mollis justo quis mauris interdum porta. Nunc volutpat accumsan nunc, at consectetur tortor commodo in. Donec molestie efficitur tempor. Nam at congue ligula. Nullam a ex varius, malesuada dolor id, accumsan eros. Quisque faucibus nec ipsum sed tempor. Cras scelerisque urna sed dolor dignissim, eget dignissim quam pharetra. Aliquam imperdiet sem vel dui suscipit, vitae imperdiet velit egestas. Aenean non eros vel leo accumsan elementum id sit amet velit.",
    },
    {
      id: 1,
      title: "Tab 2",
      content:
        "Mauris dapibus nulla nulla, in viverra magna pretium eu. Sed lectus nulla, varius vel mollis sed, consectetur nec mi. Cras sit amet turpis ultrices, tristique eros quis, blandit elit. Suspendisse facilisis hendrerit vulputate. Maecenas quis eleifend massa. Sed congue ullamcorper lacinia. Nulla malesuada molestie elit ut viverra. Vestibulum fermentum quam risus, sit amet interdum orci suscipit eu. Vivamus malesuada suscipit sem, in aliquet ex.",
    },
    {
      id: 2,
      title: "Tab 3",
      content:
        "Vestibulum sapien augue, imperdiet in porttitor aliquet, tempus vitae est. Morbi lacinia gravida quam dictum porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras posuere ullamcorper scelerisque. Nulla tempus nunc lorem, sagittis tempus neque porttitor et. Suspendisse euismod enim et nunc convallis lacinia. Fusce ultricies purus ac nisl auctor, volutpat elementum neque eleifend. Aenean euismod erat nunc. Curabitur consequat lacus vitae neque porttitor, vel bibendum turpis faucibus. Praesent blandit mollis nisl, et sollicitudin nibh. Sed non orci et massa cursus sodales. Sed tristique, dolor nec mattis pretium, odio neque vehicula nunc, a auctor urna tellus non lacus.",
    },
  ];

  // HandleTabs Change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    localStorage.setItem("activeTab", JSON.stringify(activeTab));
  }, [activeTab]);

  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {tabs.map((item, id) => (
          <Button
            variant="outlined"
            key={id}
            onClick={() => handleTabChange(item?.id)}
            sx={{
              background: item.id === activeTab ? "#0066ff" : "transparent",
              color: item.id === activeTab ? "#fff" : "#000",
              "&:hover": {
                background: item.id === activeTab && "#0066ff",
              },
            }}
          >
            {item?.title}
          </Button>
        ))}
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "960px",
          margin: "0 auto",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <Box component="p">{tabs[activeTab].content}</Box>
      </Box>
    </>
  );
};

export default Tabs;
