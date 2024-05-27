export interface Result {
  object:           string;
  id:               string;
  created_time:     Date;
  last_edited_time: Date;
  created_by:       TedBy;
  last_edited_by:   TedBy;
  cover:            null;
  icon:             null;
  parent:           Parent;
  archived:         boolean;
  in_trash:         boolean;
  properties:       Properties;
  url:              string;
  public_url:       null;
}

export interface TedBy {
  object: string;
  id:     string;
}

export interface Parent {
  type:        string;
  database_id: string;
}

export interface Properties {
  image:       Image;
  credits:     Credits;
  Tags:        Tags;
  description: Credits;
  Name:        Name;
}

export interface Name {
  id:    string;
  type:  string;
  title: Title[];
}

export interface Title {
  type:        Type;
  text:        Text;
  annotations: Annotations;
  plain_text:  string;
  href:        null | string;
}

export interface Annotations {
  bold:          boolean;
  italic:        boolean;
  strikethrough: boolean;
  underline:     boolean;
  code:          boolean;
  color:         Color;
}

export enum Color {
  Default = "default",
}

export interface Text {
  content: string;
  link:    Link | null;
}

export interface Link {
  url: string;
}

export enum Type {
  Text = "text",
}

export interface Tags {
  id:           string;
  type:         string;
  multi_select: MultiSelect[];
}

export interface MultiSelect {
  id:    string;
  name:  string;
  color: string;
}

export interface Credits {
  id:        string;
  type:      string;
  rich_text: Title[];
}

export interface Image {
  id:    string;
  type:  string;
  files: FileElement[];
}

export interface FileElement {
  name: string;
  type: string;
  file: FileFile;
}

export interface FileFile {
  url:         string;
  expiry_time: Date;
}
