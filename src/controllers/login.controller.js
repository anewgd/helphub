import { User } from "../db/conn";

export async function test(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  } else {
    const newData = new User(req.body);

    try {
      await newData.save();
      console.log("User created successfully");
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  }
}

// export async function authenticate(req, res) {
//   if (!req.body) {
//     res.status(400).send({ message: "Content can't be empty!" });
//     return;
//   } else {
//     const { username, password } = req.body;
//     let user = await User.findOne({ username: username }).exec();

//     if (!user) {
//       res.status(400).send({ message: `User ${username} not found` });
//       return;
//     } else {
//       if (password === user.password) {
//         console.log(user);
//         res.status(200).send(user);
//       } else {
//         res.status(400).send({ message: "Invailid password" });
//       }
//     }
//   }
// }

export async function login(req, res) {
  if (!req.body) {
    res.status(400).send({ message: "Content can't be empty!" });
    return;
  }

  const { username, password } = req.body;
  await User.findOne({ username: username })
    .exec()
    .then((user) => {
      if (user) {
        if (password === user.password) {
          res
            .status(200)
            .send({ data: { username: user.username, role: user.role } });
        } else {
          res.status(403).send({ message: "Incorrect password." });
        }
      } else {
        res.status(403).send({ message: `${username} not found in database.` });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
