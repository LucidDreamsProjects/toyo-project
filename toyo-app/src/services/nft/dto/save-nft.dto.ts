export interface SaveNftDto {
  name: string;
  description: string;
  image: string;
  externalUrls: string;
  backgroundColor: string;
  fungible: boolean;
  maxSupply: number;
  burnable: boolean;
  animationUrls: Array<Record<string, string>>;
  attributes: Array<Record<string, string>>;
}
