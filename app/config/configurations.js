import { Dimensions, PixelRatio } from "react-native";
import { hasNotch } from "react-native-device-info";

const CONSTANTS = {
  deviceWidth: Dimensions.get("window").width,
  deviceHeight: Dimensions.get("window").height,
  diagonalScreenSize:
    (Dimensions.get("window").width ** 2 + Dimensions.get("window").height ** 2) ** (1 / 2),
  mobileBreakPoint: 600, // alcatel 1T 7" width
  isMobileSize:
    (Dimensions.get("window").width * Dimensions.get("window").scale) / PixelRatio.get() < 600,
  hasNotch: hasNotch(),
  FILTER_SEARCH_DELAY_MS: 1000
};

const ASYNC_STORAGE_KEYS = {
  ACCOUNT_ITEM: "accountInfo"
};

// eslint-disable-next-line import/prefer-default-export
export { CONSTANTS, ASYNC_STORAGE_KEYS };
