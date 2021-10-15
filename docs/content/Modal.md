---
title: Modal
description:
source: https://github.com/millionscard/cash/blob/main/src/Modal.js
status: Alpha
---

import {Props} from '../src/props'

```jsx
const [isModalOpen, setModalOpen] = useState(false);
const toggleModal = () => {
  setModalOpen(!isModalOpen);
};

<Modal isOpen={true} onClose={toggleModal}>
  <Heading>Title</Heading>
  <ButtonOutline size="md" onPress={toggleModal} isFullWidth>
    Close modal
  </ButtonOutline>
</Modal>;
```

## Props

<Props of="Modal" />
