import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

type IProps = {
  loading: Boolean
}

export default class SDBody extends Component<IProps, {}> {

  static defaultProps = {
    loading: false
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
    const { loading } = this.props
    console.log(loading)

    const innerElement = loading ? (<View>
      正在加载中...
    </View>) : this.props.children

    return (
      <View className='index'>
        { innerElement }
      </View>
    )
  }
}

