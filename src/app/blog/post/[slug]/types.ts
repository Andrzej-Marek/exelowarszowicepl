/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface ContactRequest {
  id: string;
  email?: string | null;
  phoneNumber?: string | null;
  vinNo?: string | null;
  message: string;
  updatedAt: string;
  createdAt: string;
}
export interface Estimate {
  id: string;
  title: string;
  vinNo: string;
  brand: string;
  model: string;
  year?: string | null;
  engine: string;
  engineDetails?: string | null;
  steering?: ("LEFT" | "RIGHT") | null;
  drive?: ("AWD" | "RWD" | "FWD") | null;
  description?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  estimate:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  description_html?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
export interface BlogMedia {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    side?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    main?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
export interface BlogPost {
  id: string;
  date: string;
  isPublished?: boolean | null;
  tags?:
    | {
        tag?: string | null;
        id?: string | null;
      }[]
    | null;
  relatedBlogPosts?: (string | BlogPost)[] | null;
  heading: string;
  slug: string;
  blocks?: (RichTextBlock | ColumnsBlock | ImageBlock)[] | null;
  metadata: {
    title: string;
    description: string;
  };
  updatedAt: string;
  createdAt: string;
}
export interface RichTextBlock {
  heading: string;
  content: {
    [k: string]: unknown;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: "RichTextBlock";
}
export interface ColumnsBlock {
  leftColumn?: (ImageBlock | RichTextBlock)[] | null;
  rightColumn?: (ImageBlock | RichTextBlock)[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "ColumnsBlock";
}
export interface ImageBlock {
  file: BlogMedia;
  id?: string | null;
  blockName?: string | null;
  blockType: "ImageBlock";
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: "users";
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
