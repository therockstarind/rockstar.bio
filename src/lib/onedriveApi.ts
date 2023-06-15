const odfetch = require("onedrive-fetch");
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export interface OnedriveFile {
  "@content.downloadUrl": string;
  cTag: string;
  createdBy: {};
  createdDateTime: string;
  eTag: string;
  file: { hashes: {}; mimeType: string };
  fileSystemInfo: {};
  id: string;
  image: {};
  lastModifiedBy: {};
  lastModifiedDateTime: string;
  name: string;
  parentReference: {};
  photo: {};
  reactions: {};
  shared: {};
  size: number;
  webUrl: string;
  thumbnail?: string
}

export async function fetchMediaFiles(startIndex: number, pageSize: number): Promise<OnedriveFile[]> {
  try {
    const onedriveUrl = publicRuntimeConfig.ONEDRIVE_GALLERY;
    const files: OnedriveFile[] = await odfetch(onedriveUrl);

    // Sort files by createdDateTime (latest to last)
    const sortedFiles = files.sort((a: OnedriveFile, b: OnedriveFile) => new Date(b.createdDateTime).getTime() - new Date(a.createdDateTime).getTime());

    const paginatedFiles = sortedFiles.slice(startIndex, startIndex + pageSize);
    return paginatedFiles;
  } catch (e: any) {
    console.error(e);
    return [];
  }
}
