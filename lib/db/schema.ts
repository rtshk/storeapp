import {
  pgTable,
  uuid,
  serial,
  text,
  integer,
  numeric,
  timestamp,
  primaryKey,
} from "drizzle-orm/pg-core";

// 🧑 Users Table
export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  username: text("username").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const category = pgTable("category", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId : uuid("user_id").references(()=>users.id),
  categoryName : text("category_name").notNull(), 
  categoryImgURL : text("category_img_url"),
  createdAt : timestamp("created_at").defaultNow()
});

export const items = pgTable("items", {
  id: uuid("id").primaryKey().defaultRandom(),
  itemName: text("item_name").notNull(),
  quantity: integer("quantity").notNull(),
  imageURL: text("image_url"),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => {
      return users.id;
    }),
  categoryId : uuid("category_id").references(()=>category.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const bills = pgTable("bills", {
  id: uuid("id").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => {
      return users.id;
    }),
  totalAmount: numeric("total_amount").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const billItems = pgTable(
  "bill_items",
  {
    billId: uuid("bill_id")
      .notNull()
      .references(() => {
        return bills.id;
      }),
    itemId: uuid("item_id")
      .notNull()
      .references(() => {
        return items.id;
      }),
    itemQuantity: integer("item_quantity").notNull(),
  },
  (table) => {
    return {
      id: primaryKey({ columns: [table.billId, table.itemId] }),
    };
  }
);
