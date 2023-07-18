/* Automatically generated by './build/bin/build-entry.js' */

import Alert from '../packages/alert/index.js';
import Aside from '../packages/aside/index.js';
import Avatar from '../packages/avatar/index.js';
import Autocomplete from '../packages/autocomplete/index.js';
import Badge from '../packages/badge/index.js';
import Button from '../packages/button/index.js';
import ButtonGroup from '../packages/button-group/index.js';
import Card from '../packages/card/index.js';
import Checkbox from '../packages/checkbox/index.js';
import CheckboxButton from '../packages/checkbox-button/index.js';
import CheckboxGroup from '../packages/checkbox-group/index.js';
import Col from '../packages/col/index.js';
import Collapse from '../packages/collapse/index.js';
import CollapseItem from '../packages/collapse-item/index.js';
import ColorPicker from '../packages/color-picker/index.js';
import Container from '../packages/container/index.js';
import DatePicker from '../packages/date-picker/index.js';
import Dialog from '../packages/dialog/index.js';
import Divider from '../packages/divider/index.js';
import Drawer from '../packages/drawer/index.js';
import Dropdown from '../packages/dropdown/index.js';
import DropdownMenu from '../packages/dropdown-menu/index.js';
import DropdownItem from '../packages/dropdown-item/index.js';
import Cascader from '../packages/cascader/index.js';
import Form from '../packages/form/index.js';
import FormItem from '../packages/form-item/index.js';
import Header from '../packages/header/index.js';
import Footer from '../packages/footer/index.js';
import Icon from '../packages/icon/index.js';
import InfiniteScroll from '../packages/infinite-scroll/index.js';
import Input from '../packages/input/index.js';
import InputNumber from '../packages/input-number/index.js';
import Link from '../packages/link/index.js';
import Loading from '../packages/loading/index.js';
import Main from '../packages/main/index.js';
import Menu from '../packages/menu/index.js';
import MenuItem from '../packages/menu-item/index.js';
import MenuItemGroup from '../packages/menu-item-group/index.js';
import MessageBox from '../packages/message-box/index.js';
import Message from '../packages/message/index.js';
import Notification from '../packages/notification/index.js';
import Option from '../packages/option/index.js';
import OptionGroup from '../packages/option-group/index.js';
import PageHeader from '../packages/page-header/index.js';
import Pagination from '../packages/pagination/index.js';
import Progress from '../packages/progress/index.js';
import Popover from '../packages/popover/index.js';
import Radio from '../packages/radio/index.js';
import RadioGroup from '../packages/radio-group/index.js';
import RadioButton from '../packages/radio-button/index.js';
import Row from '../packages/row/index.js';
import Scrollbar from '../packages/scrollbar/index.js';
import Select from '../packages/select/index.js';
import Step from '../packages/step/index.js';
import Steps from '../packages/steps/index.js';
import Submenu from '../packages/submenu/index.js';
import Switch from '../packages/switch/index.js';
import TabPane from '../packages/tab-pane/index.js';
import Table from '../packages/table/index.js';
import TableColumn from '../packages/table-column/index.js';
import TimePicker from '../packages/time-picker/index.js';
import TimeSelect from '../packages/time-select/index.js';
import Tabs from '../packages/tabs/index.js';
import Tag from '../packages/tag/index.js';
import Tooltip from '../packages/tooltip/index.js';
import Tree from '../packages/tree/index.js';
import locale from '@jack-agency/element/src/locale';
import CollapseTransition from '@jack-agency/element/src/transitions/collapse-transition';

const components = [
  Alert,
  Aside,
  Avatar,
  Autocomplete,
  Badge,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Container,
  DatePicker,
  Dialog,
  Divider,
  Drawer,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Cascader,
  Form,
  FormItem,
  Header,
  Footer,
  Icon,
  Input,
  InputNumber,
  Link,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Option,
  OptionGroup,
  PageHeader,
  Pagination,
  Progress,
  Popover,
  Radio,
  RadioGroup,
  RadioButton,
  Row,
  Scrollbar,
  Select,
  Step,
  Steps,
  Submenu,
  Switch,
  TabPane,
  Table,
  TableColumn,
  TimePicker,
  TimeSelect,
  Tabs,
  Tag,
  Tooltip,
  Tree,
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(InfiniteScroll);
  Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '2.19.5',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Loading,
  Alert,
  Aside,
  Avatar,
  Autocomplete,
  Badge,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Container,
  DatePicker,
  Dialog,
  Divider,
  Drawer,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Cascader,
  Form,
  FormItem,
  Header,
  Footer,
  Icon,
  InfiniteScroll,
  Input,
  InputNumber,
  Link,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  MessageBox,
  Message,
  Notification,
  Option,
  OptionGroup,
  PageHeader,
  Pagination,
  Progress,
  Popover,
  Radio,
  RadioGroup,
  RadioButton,
  Row,
  Scrollbar,
  Select,
  Step,
  Steps,
  Submenu,
  Switch,
  TabPane,
  Table,
  TableColumn,
  TimePicker,
  TimeSelect,
  Tabs,
  Tag,
  Tooltip,
  Tree
};
