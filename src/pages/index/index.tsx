import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

import SDBody from '../../comps/sd-body'

type IState = {
  loading: boolean
}

export default class Index extends Component<{}, IState> {

  constructor() {
    super();
    this.state = {
      loading: true
    }
  }

  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000)
    return (
      <SDBody loading={this.state.loading}>
        <View>测试内容</View>
      </SDBody>
    )
  }
}

