# Vue4群大老师的小仓库 xyl-ui

### 安装

```shell
npm i xyl-ui
```
### 引用组件

```javascript
//单独引用
import { Xylbutton, XylTag} from 'xyl-ui'
Vue.use(Xylbutton)
Vue.use(XylTag)

//全局引用
import xylui from 'xyl-ui'
Vue.use(xylui)
```

### 使用组件

```html
<Xyl-button :msg="msg" />
<Xyl-tag msg="我是标签" />
```

