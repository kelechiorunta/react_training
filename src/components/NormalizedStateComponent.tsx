import React from "react";

const data = {
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

export default function NormalizedStateComponent() {
  return <div>NormalizedStateComponent</div>;
}
