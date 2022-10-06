# 学习使用React框架
- React的特点
    1. 采用组件化模式,声明式编码,提高开发效率和组件复用率
    2. 在React Native中可以使用React语法进行移动端开发
    3. 使用虚拟DOM和优秀的Diffing算法,减少和真实DOM的交互
- React的核心
    - react核心库
    - react-dom库
- 关于虚拟DOM
    - 本质为一个普通的JS对象
    - 虚拟DOM比较"轻",真实DOM比较"重",因为虚拟DOM是在React内部中使用,无需真实DOM中那么多属性
    - 虚拟DOM最终都会转换为真实DOM渲染
- JSX
    - 全称"JavaScript XML"
    - react定义的一种类似于XML的JS扩展语法
    - 本质是React.createElement的语法糖
    - 作用:使用HTML的写法来创建虚拟DOM
    - 语法:
        1. 标签中使用JS表达式要使用{}
        2. 样式的类名属性必须使用className
        3. style样式要使用style={{属性:属性值}}的方式
        4. 虚拟DOM只能有一个根元素
        5. 标签必须闭合
        6. 标签首字母:
            - 小写开头,将会转换为HTML元素同名元素
            - 大写开头,将会转换为React component,如果没有定义该组件则报错
- React的API 
    - setState
        - 用于更新数据和视图(对一个组件的state对象安排一次更新,当state改变了,该组件就会重新渲染)
        - 更新是进行合并,而不是替换原来的state
- 组件
    - 组件使用多个类名样式,可以使用ES6模板字符串
    - 函数式组件:
        - 适用于简单的组件,因为只能使用props属性
        - 语法:创建一个函数首字母大写,返回React元素
        - 在React16.8中添加了Hooks,使得函数组件也可以使用state和生命周期
        - Hooks(钩子)
            - State Hook(状态钩子)
                - 该钩子可以模拟state
                - 在React中引入useState,传入一个初始值,该函数返回一个数组,数组的第一个元素是你传入的值,第二个元素是一个函数,这个函数可以修改之前的初始值更新页面,该函数接收一个新的值或者是一个返回新的值的函数
            - Effect Hook(副作用钩子)
                - 该钩子可以模拟生命周期
                - 在React中引入useEffect,该函数接收两个参数
                - 参数1:回调函数,如果返回一个函数(最好返回一个函数,不然该参数在调用时会对页面造成一些副作用),会类似于componentWillUnmount调用
                - 参数2:数组(可选参数),
                    1. 如果不使用该参数则会在state发生变化后是调用参数1,类似于componentDidUpdate
                    2. 如果是空数组,代表监听任何state,参数1只会调用一次,相当于componentDidMount,
                    3. 如果数组中有state,就会在数组中的state改变时调用,类似watch
            - Ref Hook(引用钩子)
                - 和createRef的功能一样,只不过是函数组件中使用
            - useContext(上下文钩子)
                - 接收一个上下文对象获取该上下文的数据
            - useMemo(使用记忆性钩子)
                - 把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized(有记忆性的) 值。这种优化有助于避免在每次渲染时都进行高开销的计算。
            - useReducer
                - 可以在函数组件使用redux,但是如果使用react-redux可以不使用这个钩子
    - 类式组件
        - 适用于复杂的组件,可以使用组件的三大属性
        - 必须继承React.Component类,类中必须定义一个render函数,并返回一个虚拟DOM
        - 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。
        - 在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，应在其他语句之前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。
        - 关于事件的this指向问题:
            1. 可以使用bind修改this指向
            2. 使用箭头函数
    - 组件三大属性
        1. state(状态)
            - 用于存放数据
            - 数据不可以直接修改,必须要借助React内置的API,setState函数更新
            - 关于setState函数:
                - 第一个参数是需要修改的数据,可以是对象,也可以是函数
                - 第二个参数是回调函数(可选参数),该函数在更新render之后调用,因为setState是异步渲染,为了合并多个state的修改
        2. props    
            - 用于接收父组件的数据,props是只读的
            - 语法:
                1. 属性="属性值"||{表达式}
                2. 属性={...变量} 扩展语法
            - props规则限制 
                - 必须给类添加一个propTypes属性
                - 下载prop-types库进行类型检查,全局使用PropTypes
                    -  类型:进行类型检查,函数类型写做func
                    - isRequired(必需的):设置必填
                - 添加defaultProps属性设置默认值
                    - 该值类型为对象
                    - 属性:默认值
                - 简写方式:
                    在组件类的内部添加静态属性即可
        3. refs
            - 组件内的标签可以定义ref属性来标识自身,不要过度使用ref
            - refs中存放着被标识的元素节点
            - 回调形式[推荐使用]
                - 如果 ref 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 null，然后第二次会传入参数 DOM 元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。
                - 语法:ref={(currentNode) => {代码} }
            - 字符串形式[不推荐使用]
                - 在React@18被弃用,因为有效率问题
                - 语法:ref="标识"
            - React.createRef方法形式
                - 该方法返回一个对象,将该对象作为ref标识,会将该对象的current属性修改为被标识的元素
                - 该对象只能应用于一个元素
    - 事件处理
        - 通过onXxx属性指定事件处理回调
            1. React中的事件使用的是自定义(合成)事件,而不是使用的原生DOM事件
            2. React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)
        - 通过event.target得到发生事件的DOM元素对象
    - 组件间传递数据
        - 父传子:
            - 使用props
        - 子传父:
            - 使用props给子组件传递一个处理函数,然后将数据传入处理函数,这被称为"状态提升";
        - 兄弟组件通信与跨组件通信:
            - 使用pubsub-js
        - context(上下文):
            - 常用于祖先组件和后代组件通信
            - 类组件:
                - 使用React.createContext函数,创建一个上下文,这个上下文通过一个<Provider value={数据}>,
                    使用这个标签包裹祖先组件就可以传递数据给后代,需要数据的后代只要声明一个静态属性就可以使用context了,例如:static contextType = 创建的上下文;
            - 函数组件:
                - 使用useContext钩子实现上下文对象,不过需要引入创建的Context,或者使用Context.Consumer接收一个函数该函数接收传入的上下文,返回值作为内容渲染
    - 组件优化
        - component存在的的问题
            1. 只要调用的setState,即使不改变状态数据,组件也会重新渲染
            2. 只要当前组件渲染,哪怕子组件的state或props没有任何改变,也会重新渲染所有的子组件,这样会导致效率低下
            - 原因是component的shouldComponentUpdate生命周期钩子总是默认返回true,解决办法是直接重写shouldComponentUpdate或者使用PureComponent
        - PureComponent(纯组件)
            - 只能类组件使用
            - 该组件重写了shouldComponentUpdate,会进行浅比较判断,先会判断内存地址是否相同,如果相同不会触发更新
        - memo(记忆性)
            - 是一个高阶组件,和PureComponent功能一样,但是只能对props起作用
            - 参数1:需要使用的组件
            - 参数2(可选参数):默认值就是PureComponent的shouldComponentUpdate,也可以自己写一个控制更新的函数,自己写的函数接收两个参数,一个是改变之前props,一个是改变之后的props
            - 但是最好使用值类型的props,如果使用引用类型的props,可能就不起作用了,不过可以使用useMemo Hook解决
    - 非受控组件
        - 就是不受React控制的组件
    - 受控组件
        - 就是受React控制的组件
    - 组件生命周期
        - 常用的生命周期
            1. constructor:组件初始化
            2. render:初始化渲染时和更新组件时
            3. componentDidMount:组件挂载之后
            4. componentDidUpdate:组件更新之后
            5. componentWillUnmount:组件卸载之前
        - 不常用的生命周期
            1. getDerivedStateFromProps
                - 该钩子必须定义为静态方法,并且接收props和state
                - 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
                - 此方法适用于罕见的用例，即 state 的值在任何时候都取决于 props。例如，实现 <Transition> 组件可能很方便，该组件会比较当前组件与下一组件，以决定针对哪些组件进行转场动画。
            2. shouldComponentUpdate
                - 调用setState时调用,控制组件是否更新
                - 当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法。
                - 根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染。大部分情况下，你应该遵循默认行为。
            3. getSnapshotBeforeUpdate
                - 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期方法的任何返回值将作为参数传递给 componentDidUpdate()
        - 生命周期执行顺序官方图(新):[https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]
            - 在React@17以上不推荐使用[[componentWillMount],[componentWillUpdate],[componentWillReceiveProps]]这三个钩子,如果要使用,必须加上前缀UNSAFE_才可以使用
            - React在新的版本中添加了三个新的生命周期钩子,
            - 挂载时:
                [counstructor] --> [getDerivedStateFromProps] --> [render] --> [componentDidMount]
            - 更新时:
                [getDerivedStateFromProps] --> [shouldComponentUpdate] --> [render] --> [getSnapshotBeforeUpdate] --> [componentDidUpdate]
            - 卸载时
                [componentWillUnmount]
    - key的作用
        - 方便diffing算法进行比较,如果key不一样就直接生成新的DOM,这个可以参考Vue的key
        - 默认指定index为key
- React脚手架
    - 项目架构为:React + webpack + es6 + eslint
    - 项目名称不能出现大写字母
    - 为了区分组件和普通的js,我们的组件文件可以后缀名为jsx
    - 样式模块化,使用[样式名.module.css]可以和js接收样式对象,然后使用jsx语法添加样式
    - 项目命令行依次运行 npx create-react-app my-app,cd my-app,npm start
    - 项目结构
        - public
            - index.html 应用界面
            - manifest.json 应用加壳配置信息
            - robots.txt 爬虫协议文件
        - src
            - App.css App组件的样式
            - App.js App组件
            - App.test.js App组件测试文件
            - index.css 基本样式
            - index.js 应用程序入口
            - reportWebVitals.js 性能检测功能文件
            - setupTest.js 单元测试文件
- 代理服务器
    - 单个代理
        - package.json中配置"proxy":"服务器地址"
    - 多个代理
        - 在src文件夹中创建setupProxy.js文件配置代理
- React路由
    - route(路由)是一组key-value的关系,多个路由需要经过路由器的管理
    - 路由组件一般放在pages文件夹,一般组件放在components文件夹
    - React-router可以让SPA(单页面Web应用),变得轻而易举
    - 浏览器历史记录是栈结构
    - React-router有三个版本,分别为web版本(react-router-dom),React native版本,以及在多个平台使用的any版本
    * react-router-dom@5的使用
        - 在使用路由的外部添加<BrowserRouter>或者<HashRouter>组件,这个标签代表创建一个路由器管理路由组件
        - 导航区使用的a标签替换为<Link>组件,例如:<Link to="/xxxx">demo</Link>
            - 如果需要添加高亮就使用<NavLink>组件,activeClassName属性指定被选中时使用的类名样式
        - 路由组件标签体的内容会添加到props中的children属性中,和vue的插槽有点相似
        - 展示区使用<Route>组件进行路径的匹配,<Route path="/xxxx" component={demo}></Route>
        - 路由的历史记录,分为push模式和replace模式,push是添加记录,replace是替换当前最新的记录,默认开启push模式,需要修改为replace模式,例如:<Link replace>
        - lazy(懒加载)
            - 从React中引入,传入一个函数使用import函数返回动态加载的文件
            - 配合<Suspense>,fallback属性使用加载时的组件
        - <withRouter>
            - withRouter可以加工一般组件,使其可以使用路由组件特有的API
            - 您可以通过 withRouter 高阶组件访问 history 对象的属性和最近的 <Route> 的 match 。 当路由渲染时， withRouter 会将已经更新的 match ， location 和 history 属性传递给被包裹的组件。
            - 例如:withRouter(普通组件),这时普通组件的props中就会出现路由组件的history对象,就可以使用路由跳转了
            - 在v6版本以移除
        - 编程式路由导航
            - 路由的历史记录,可以使用this.props.history.push的设置路由跳转,该函数接收,跳转路由路径和state
        - 路由匹配:
            - React默认匹配所有符合路径规则的路由组件,如果想只匹配第一个符合规则的路由组件,就需要所有<Switch>包裹起来,这样就可以只匹配首个组件
            - 匹配规则:
                1. 模糊匹配:输入的路径必须包含匹配的路径,且顺序要一样,例如:/Home/a/b 匹配 /Home 匹配成功
                2. 精准匹配:添加exact属性开启,会进行严格的匹配,必须路径一样 
            - 路由重定向
                - 使用<Redirect>组件,当所有路由组件都没有匹配到时,将跳转<Redirect>指定的路由组件
                - 一般写在所有路由的最下方,例如:
                    <Switch>
                        <Route exact path="/Home" component={Home}></Route>
                        <Route exact path="/About" component={About}></Route>
                        <Redirect to="/Home"></Redirect>
                    </Switch>
        - 嵌套路由
            - 注册子路由是要写上父路由的路径
            - 路由的匹配是按照注册顺序进行的
        - 路由组件传递参数
            1. 使用params传递
                - 路由路径使用模板字符串,例如:to={`/Home/Message/Detail/${参数值}`}
                - 注册路由接收参数,例如:path="/Home/Message/Detail/:参数名"
                - 在props.match.params中使用参数,params是解析好的对象
            2. 使用search传递
                - 路由路径使用模板字符串,例如:to={`/Home/Message/Detail/?参数名=${参数值}&参数名=${参数值}`}
                - 注册路由接收参数,例如:path="/Home/Message/Detail"
                - 在props.location.search中使用参数,search是路径之后的字符串,需要自己解析,推荐使用querystring这个库解析
            3. state传递
                - 路由路径<Link to={{ pathname:"路径",state:{参数:值} }}></Link>
                - 注册路由接收参数,例如:path="/Home/Message/Detail"
                - 在props.location.state中使用参数,在历史记录为空的情况下,刷新有可能丢失参数,可以设置默认值解决
        - 路由组件的props会变成路由器传入的特殊对象
        - <BrowserRouter>和<HashRouter>的区别
            1. 底层原理不一样:
                - <BrowserRouter>使用的是H5的history API,不兼容IE9及以下版本
                - <HashRouter>使用的是URL的哈希值
            2. url表现形式不一样:
                - <BrowserRouter>的URL路径中不包含#,例如:http://localhost::3000/Home
                - <HashRouter>的URL路径中包含#,例如:http://localhost::3000/#/Home
            3. 刷新后对路由state参数的影响
                - 对<BrowserRouter>没有任何影响,因为state保存在history对象中
                - 对<HashRouter>有影响,有可能会导致路由state参数丢失
            4. <HashRouter>可以用于解决一些路径错误的相关问题
        - 解决多级路径刷新页面样式丢失问题:
            1. 引入样式不使用./相对路径,替换为/
            2. 引入样式不使用./相对路径,替换为"%PUBLIC_URL%
            3. 使用<HashRouter>
    * react-router-dom@6相对@5版本有了哪些的变化
        1. 将<Switch>替换为了<Routes>,效果不变,但是使用路由必须要使用<Routes>
        2. 将<Redirect>替换为了<Navigate>,使用方式变为:
           - <Route path="/" element={<Navigate to="/Home"></Navigate>}></Route>
           - <Navigate>组件只要渲染就会引起视图的切换
        3. 可以使用useRoutes动态生成路由匹配标签,只需要想Vue那样创建一个文件管理路由规则就行
        4. <NavLink>的end属性,如果添加给属性,匹配成功后,父<NavLink>组件将失去高亮
        5. 新增<Outlet>,相当于Vue的<Route-link>
        6. 关于子级路由,可以不用写之前的匹配路由路径,写自己组件对应的路由就行
        7. 函数组件的路由参数不在props中传递了,需要使用Hooks获取
        * 注意以下是新增的路由钩子:
            - useParams:返回paramscs
            - useMatch:需要将完整路径传入,返回match对象
            - useSearchParmas:返回一个数组,数组的第一个元素是保存了参数的Map,第二个元素是更新参数的方法,例如
            setSearch("id=777&title=abc");
            - useLocation:获取Location对象,获取state参数是在Location中获取
            - useNavgiate替换了useHistory,返回一个函数,传入路径进行跳转
            - useRouterContext:检测是否在路由上下文中
            - useNavigateType:返回当前的导航类型(即用户是如何来到当前页面的),返回值：POP(用户通过刷新页面来到),PUSH,REPLACE
            - useOutlet:用来呈现当前组件中渲染的嵌套路由,如果嵌套路由还没挂载就返回null,挂载了就返回该路由的路由对象
            - useResolvedPath:接收一个URL,用于解析path,search和hash值,返回一个对象
        8. 关于类组件使用路由参数,只能使用<Navgiate>或者手写<WithRoute>
        * 注意:如果多级路由中有使用了懒加载的路由组件,在访问时会找不到模块
- Redux(全局状态管理工具)
    - Readx的三个核心概念
        - action(行为对象)
            - 该对象必须有两个属性
                1. type:标识属性,类型为string,唯一值,必须指定该属性
                2. data:数据属性,类型为任意,可选属性
        - reducers(整流器)
            - 用于加工和初始化数据
            - 加工时,根据旧的state和action,产生新的state的纯函数,纯函数不能依赖外部变量和修改外部变量
            - 该函数由开发者定义,接收perviousState和action,进行加工,返回新的state 
        - store(仓库)
            - state的拥有者和管理者,将state,action和reducer联系在一起的对象
        * 备注:建议行为的类型使用常量模块,在redux中创建constant.js
    - 使用异步action需要安装中间件,redux-thunk
    - redux开发者工具的使用
        1. 下载redux Dev Tools浏览器插件
        2. 安装npm i redux-devtools-extension
        3. 在store.js中引入
        4. const store = createStore(reducer,composeWithDevTools(中间件));
    - react-redux(react专用的redux)
        - 组件想要使用这个版本的,必须分出容器组件和UI组件,容器组件负责使用store,UI组件负责展示,它们之间使用props传递数据,类似于"状态提升"
        - 使用react-redux的connect创建容器组件,容器组件一般放在container文件夹中
            - 例如:const container = connect(mapStateToProps,mapDispatchToProps)(UI组件);
                - mapStateToProps(映射状态到props):该值为函数(接收state),必须返回一个对象,该对象将作为props传递给UI组件
                - mapDispatchToProps(映射派遣到props):该值为函数(接收dispatch方法)或者对象(对象包含创建行为的方法,react-redux则会自动dispatch),返回一个对象(该对象包含创建行为并派遣的方法),该对象将作为props传递给UI组件
        - 注:使用react-redux手动不用监听变化更新,它已经被封装在connect中了
        - <Provider>
            - 使用react-redux不需要将store手动传递给每个容器组件了,使用<Provider store={store}>,将store交给该组件,它会自动分发store给容器组件
        - 使用combineReducers合并多个reducer,传入一个对象,给对象的键名对应使用时的值,键值为值对应的reducer
- Fragment(碎片)
    - 和Vue中的template一样,不用在最外层多套一层div,在解析的时候不会添加新的div
    - 这个标签可以只能指定key属性,方便在循环遍历时优化diff算法,如果不用循环,可以使用空标签
- 错误边界(Error Boundaries)
    - 处理错误边界的方式:
        1. static getDerivedStateFromError:这个静态方法接收一个错误,返回的值将作为组件的state
        2. componentDidCatch:这个方法在捕获到错误时调用,一般由于统计错误,提交给服务器
        3. 可以封装一个<ErrorBoundaries>组件
        例如:
            class ErrorBounder extends Component {
                state = {error:""};
                static getDerivedStateFromError(error) {
                    return {error};
                };
                componentDidCatch() {
                    //将错误统计
                };
                render() {
                    const { children } = this.props;
                    if(!this.error) {
                        return children;
                    }else {
                        return 错误组件;
                    }
                }
            }
    - 注意:错误边界无法捕获以下错误
        1. 事件处理
        2. 异步代码
        3. 服务端渲染
        4. 它自身抛出来的错误（并非它的子组件）
- 关于组件会渲染两次
    - 因为默认启用了<React.StrictMode>,这个模式下的开发环境会调用两次渲染函数,以防止出现bug和检测副作用
    - 在生产模式下只会渲染一次
- React的UI组件库
    - antd
        - 组件样式按需引入,使用craco,创建craco.config.js配置文件,在里面添加balel的import插件
- React的vs插件
    - ES7+ React/Redux/React-Native snippets
