# Vue4群大老师的小仓库 xyl-ui

### 安装

```shell
npm i xyl-ui
```
### 引用组件

```javascript
//单独引用
import { Button, Tag , Toast} from 'xyl-ui'
Vue.use(Button)
Vue.use(Tag)

Toast('轻提示')

//全局引用
import xylui from 'xyl-ui'
Vue.use(xylui)


```

### 使用组件

```html
<xyl-button :msg="msg" />
<xyl-tag msg="我是标签" />

this.$toast('轻提示')

```

