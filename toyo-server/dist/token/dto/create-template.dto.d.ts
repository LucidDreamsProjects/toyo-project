export declare class CreateTemplateDto {
    name: string;
    description: string;
    image: string;
    externalUrl: string;
    backgroundColor: string;
    fungible: boolean;
    maxSupply: string;
    burnable: boolean;
    animationUrls: Array<Record<string, string>>;
    attributes: Array<Record<string, string | undefined>>;
}
