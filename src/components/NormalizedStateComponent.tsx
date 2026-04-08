import React, { useState } from "react";

const nestedData = {
  users: [
    {
      id: "u1",
      name: "Alice",
      posts: [
        {
          id: "p1",
          title: "First Post",
          comments: [
            {
              id: "c1",
              text: "Nice post!",
              author: {
                id: "u2",
                name: "Bob",
                profile: {
                  avatar: "bob.png",
                  social: {
                    twitter: "@bob",
                    github: "bobhub",
                  },
                },
              },
            },
          ],
        },
      ],
    },
  ],
};

const normalizedData = {
  users: {
    u1: { id: "u1", name: "Alice", posts: ["p1"] },
    u2: { id: "u2", name: "Bob", profile: "profile1" },
  },
  posts: {
    p1: { id: "p1", title: "First Post", comments: ["c1"], authorId: "u1" },
  },
  comments: {
    c1: { id: "c1", text: "Nice Post", authorId: "u2" },
  },
  profiles: {
    profile1: { id: "profi1e", avatar: "bob.png", socials: "s1" },
  },
  socials: {
    s1: { id: "s1", twitter: "@bob", github: "@bobhub" },
  },
};

type User = {
  id: string;
  name: string;
  posts?: string[];
  profile?: string;
};

type Users = {
  [key: string]: User;
};

type Data = {
  users: Users; //Record<string, object>;
  posts: Record<string, object>;
  comments: Record<string, object>;
};

export default function NormalizedStateComponent() {
  const [data, setData] = useState<Data>(normalizedData);

  const handleNameChange =
    (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setData((prev) => ({
        ...prev,
        users: {
          ...prev.users,
          [id]: { ...prev.users[id], name: e.target.value },
        },
      }));
    };

  const handleTitleChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setData((prev) => ({
        ...prev,
        posts: {
          ...prev.posts,
          [name]: { ...prev.posts[name], title: e.target.value },
        },
      }));
    };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Users", data.users);
    console.log("Posts", data.posts);
  };

  return (
    <article>
      <h2>NormalizedStateComponent</h2>
      <section style={{ display: "flex", gap: 2 }}>
        <aside className="user">
          <form action="submit" onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name:
              <input
                type="string"
                name="name"
                placeholder="Enter Name"
                value={data.users.u1.name}
                onChange={handleNameChange("u1")}
              />
            </label>
            <hr />

            <fieldset name="post">
              <label htmlFor="title">
                Title:
                <input
                  type="string"
                  name="title"
                  placeholder="Enter Title"
                  onChange={handleTitleChange("p1")}
                />
              </label>
              <fieldset name="comment">
                {" "}
                <label htmlFor="">
                  Text:
                  <input type="string" name="" placeholder="Enter Text" />
                </label>
              </fieldset>
            </fieldset>
            <button type="submit">Save</button>
          </form>
        </aside>
        <aside className="user">
          <form action="submit" onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name:
              <input
                type="string"
                name="name"
                value={data.users.u2.name}
                placeholder="Enter Name"
                onChange={handleNameChange("u2")}
              />
            </label>
            <hr />

            <fieldset name="post">
              <label htmlFor="title">
                Title:
                <input
                  type="string"
                  name="title"
                  placeholder="Enter Title"
                  onChange={handleTitleChange("p2")}
                />
              </label>
              <fieldset name="comment">
                {" "}
                <label htmlFor="">
                  Text:
                  <input type="string" name="" placeholder="Enter Text" />
                </label>
              </fieldset>
            </fieldset>
            <button type="submit">Save</button>
          </form>
        </aside>
      </section>
    </article>
  );
}
