export interface ProductDemo {
  _id?: string;
  title?: string;
  description?: any;
  sku?: string;
  regular_price?: number;
  id_marketplace_store_category?: string;
  images?: Image[];
  status?: string;
  id_product?: number;
  id_depot?: number;
  medium?: Medium[];
  small?: Small[];
  id_marketplace_store_brand?: IdMarketplaceStoreBrand;
  amenity_add?: boolean;
  booking_detail?: boolean;
  has_booking?: boolean;
  has_daypass?: boolean;
  unit?: any;
  order_anonymous?: boolean;
  featured?: boolean;
  offer_percent?: any;
  offer_price?: any;
  date_on_sale_from?: any;
  date_on_sale_to?: any;
  stock_quantity?: number;
  factor?: string;
  regular_usd?: number;
  tax_rate?: number;
  print?: boolean;
  variations?: any[];
  large?: Large[];
  image?: Image2;
  variation?: boolean;
  size?: boolean;
  color1?: boolean;
  color2?: boolean;
  model?: boolean;
  reviews_average?: number;
  pickup?: any[];
  check_pickup?: boolean;
  has_variation?: boolean;
  hash?: string;
  site_name?: string;
  marketplace?: string;
  store?: string;
  ico?: string;
  flag?: string;
  url?: string;
  offer_usd?: any;
  offer_min?: any;
  brand?: string;
}

export interface Image {
  _id?: Id;
  name?: string;
  image?: string;
  position?: number;
  mime?: string;
  id_product?: number;
  massive?: boolean;
  text?: string;
}

export interface Id {
  $id?: string;
}

export interface Medium {
  image?: string;
  text?: string;
}

export interface Small {
  image?: string;
  text?: string;
}

export interface IdMarketplaceStoreBrand {
  $id?: string;
}

export interface Large {
  position?: number;
  image?: string;
  text?: string;
}

export interface Image2 {
  _id?: Id2;
  name?: string;
  image?: string | null;
  position?: number;
  mime?: string;
  id_product?: number;
  massive?: boolean;
  text?: string;
}

export interface Id2 {
  $id?: string;
}