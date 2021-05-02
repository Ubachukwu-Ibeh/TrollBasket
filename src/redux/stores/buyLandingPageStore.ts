import { IBuyPageStore } from "../../interfaces/buyPage-interface";
import storage, { setSessionStorage } from "../../helpers/storage";

export const buyLandingPageStore: IBuyPageStore = {
  selectedLocation: "All",
  hasCheckedNotification: true
};

setSessionStorage(storage.buyPage, buyLandingPageStore);
