import { ATM, ATMType } from "./atm.model";

export const MOCK_ATMS: ATM[] = [
  {
    id: 1,
    type: {
      id: 1,
      type: "beskontaktni"
    },
    address: "Zagreb 199",
    annotation: "Not working"
  },
  {
    id: 2,
    type: {
      id: 2,
      type: "uplatno-isplatni"
    },
    address: "Zagreb 197",
    annotation: "Not working"
  },
  {
    id: 3,
    type: {
      id: 3,
      type: "dnevno-noćni trezor"
    },
    address: "Zagreb 196",
    annotation: "Not working"
  },
  {
    id: 4,
    type: {
      id: 4,
      type: "kovinomat"
    },
    address: "Zagreb 199",
    annotation: "Not working"
  }

]


export const MOCK_ATM_TYPE: ATMType[] = [
  {

    id: 1,
    type: "beskontaktni"
  },
  {
    id: 2,
    type: "uplatno-isplatni"
  },
  {
    id: 3,
    type: "dnevno-noćni trezor"
  },

  {
    id: 4,
    type: "kovinomat"
  }

]