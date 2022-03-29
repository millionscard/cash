---
title: Numpad
description:
source: https://github.com/millionscard/cash/blob/main/src/Numpad
status: Alpha
---

import {Props} from '../src/props'

```jsx
const [value, setValue] = useState('');
const numpadPressHandler = useCallback(value => {
  setValue(value);
}, []);

<NumpadOutput value={value} />
<Numpad onPress={numpadPressHandler} />
```

## Props

<Props of="Numpad" />
