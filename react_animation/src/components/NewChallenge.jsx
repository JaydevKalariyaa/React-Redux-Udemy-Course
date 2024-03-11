import { useContext, useRef, useState } from "react";

import { ChallengesContext } from "../store/challenges-context.jsx";
import Modal from "./Modal.jsx";
import images from "../assets/images.js";
import { motion, stagger, useAnimate } from "framer-motion";
export default function NewChallenge({ onDone }) {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  const [selectedImage, setSelectedImage] = useState(null);
  const { addChallenge } = useContext(ChallengesContext);
  const [scope, animate] = useAnimate();
  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const challenge = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage,
    };
    if (!challenge.title.trim()) {
      animate(
        "#title",
        { x: [-10, 0, 10, 0], borderColor: "red" },
        { type: "spring", delay: stagger(0.1), duration: 0.5 }
      );
      return;
    }
    if (!challenge.deadline.trim()) {
      animate(
        "#deadline",
        { x: [-10, 0, 10, 0], borderColor: "red" },
        { type: "spring", delay: stagger(0.1), duration: 0.5 }
      );
      return;
    }
    if (!challenge.description.trim()) {
      animate(
        "#description",
        { x: [-10, 0, 10, 0], borderColor: "red" },
        { type: "spring", delay: stagger(0.1), duration: 0.5 }
      );
      return;
    }
    if (!challenge.image) {
      animate(
        "#new-challenge-images",
        { x: [-10, 0, 10, 0], border: "1px solid red" },
        { type: "spring", delay: stagger(0.1), duration: 0.5 }
      );
      return;
    }

    onDone();
    addChallenge(challenge);
  }

  return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={handleSubmit} ref={scope}>
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>

        <motion.ul
          id="new-challenge-images"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {images.map((image) => (
            <motion.li
              key={image.alt}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? "selected" : undefined}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1.1 },
              }}
            >
              <img {...image} />
            </motion.li>
          ))}
        </motion.ul>

        <p className="new-challenge-actions">
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button>Add Challenge</button>
        </p>
      </form>
    </Modal>
  );
}
