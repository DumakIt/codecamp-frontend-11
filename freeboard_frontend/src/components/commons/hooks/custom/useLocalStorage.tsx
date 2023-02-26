import { Dispatch, SetStateAction } from "react";

export const useLocalStorage = () => {
  const setRecentlyViewed = (args) => {
    const Item = { value: args, expire: Date.now() + 5000 };

    const recentlyViewedItems = JSON.parse(localStorage.getItem("recentlyViewedItems") ?? "[]");
    for (let i of recentlyViewedItems) {
      if (i.value.id === Item.value.id) return;
    }
    recentlyViewedItems.unshift(Item);
    localStorage.setItem("recentlyViewedItems", JSON.stringify(recentlyViewedItems));
  };

  const getRecentlyViewed = (setViewedItems: Dispatch<SetStateAction<string>>) => {
    if (!localStorage.recentlyViewedItems) {
      localStorage.setItem("recentlyViewedItems", JSON.stringify([]));
      return;
    }

    let recentlyViewedItems = JSON.parse(localStorage.getItem("recentlyViewedItems") ?? "[]");
    if (!recentlyViewedItems.length) return;

    for (let i = 0; i < recentlyViewedItems.length; i++) {
      if (Date.now() > recentlyViewedItems[i].expire) {
        recentlyViewedItems.splice(i, 1);
      }
    }
    localStorage.setItem("recentlyViewedItems", JSON.stringify(recentlyViewedItems));
    setViewedItems(recentlyViewedItems);
  };

  return { setRecentlyViewed, getRecentlyViewed };
};
