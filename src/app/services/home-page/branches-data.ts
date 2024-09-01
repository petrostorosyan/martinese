import la from "../../../../public/assets/images/home-page/branches/la-branch.webp";
import sanFrancisco from "../../../../public/assets/images/home-page/branches/san-francisco-branch.webp";
import malibu from "../../../../public/assets/images/home-page/branches/malibu-branch.webp";
import type { StaticImageData } from 'next/image';

type BranchData = {
  id: number;
  branchImgSrc: StaticImageData;
  branchName: string;
};

export const branchData: BranchData[] = [
  { id: 1, branchImgSrc: la, branchName: "Los Angeles, CA" },
  { id: 2, branchImgSrc: sanFrancisco, branchName: "San Francisco, CA" },
  { id: 3, branchImgSrc: malibu, branchName: "Malibu, CA" },
];
