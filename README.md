<div align="center">
  <img src="./public/logo-horizontal.png" alt="喆也传媒" width="360" />

  # 喆也传媒官方网站

  **立足三门峡，辐射全国｜一站式新媒体运营与直播电商解决方案**

  [在线访问](https://www.pilotage.top:8088) · [成功案例](https://www.pilotage.top:8088/cases) · [立即咨询](https://www.pilotage.top:8088/contact)
</div>

---

## 项目简介

本仓库是河南喆也文化传媒有限公司的官方网站源码。网站用于向品牌方、本地商家及合作伙伴集中展示公司能力、合作经验与真实业务成果，帮助客户快速了解服务范围并发起合作咨询。

喆也传媒成立于 2019 年，专注数字内容与直播电商领域，提供从账号孵化、内容生产到直播转化、品牌营销的全链路服务。

> 网站成品：[https://www.pilotage.top:8088](https://www.pilotage.top:8088)

## 核心业务

| 服务方向 | 服务内容 |
| --- | --- |
| MCN 机构运营 | 达人孵化与管理、内容策划、流量扶持及商业变现 |
| 直播电商 | 直播间搭建、直播策划、团队执行与带货转化 |
| 短视频制作 | 创意脚本、专业拍摄、后期剪辑与内容包装 |
| 娱乐直播 | 主播招募、培训及公会运营 |
| 品牌全案营销 | 品牌策略、渠道整合、内容传播与效果提升 |
| 本地生活服务 | 通过新媒体连接本地商家与消费者，助力实体经营 |

## 案例展示

网站目前收录六类业务成果，所有案例均可进入详情页查看完整图片资料：

- 抖音账号运营：展示账号增长与内容运营成果
- 直播带货数据：展示直播成交与运营数据
- 客资转化案例：展示线索获取与客户转化效果
- 后台经营效果：展示经营后台与成交增长成果
- 直播间人气：展示直播间曝光、互动与成交表现
- 爆款作品：展示高播放量、高互动内容

已展示的合作品牌包括禾木家居、华硕电脑、张金宝酸菜串串、金玫瑰大酒店等。更多内容请访问[成功案例页面](https://www.pilotage.top:8088/cases)。

## 网站特色

- 品牌首页：集中传达公司定位、认证能力和服务范围
- 案例图库：按业务类型组织案例，支持详情浏览与大图预览
- 合作展示：呈现部分合作品牌，增强客户信任
- 咨询转化：通过微信、电话、邮箱和地址承接合作意向
- 响应式设计：兼顾电脑与手机端访问体验
- 容器化部署：支持使用 Docker 与 Nginx 快速上线

## 联系合作

如果您正在寻找短视频代运营、直播电商、品牌营销或本地生活推广服务，欢迎联系我们：

- 电话：13323667247
- 邮箱：jaimeluvavocados@hotmail.com
- 地址：河南省三门峡市商会大厦 B 座 20 层
- 微信：访问[联系我们页面](https://www.pilotage.top:8088/contact)扫码添加客服

## 技术栈

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- Motion 动效
- React Router
- Docker + Nginx

## 本地运行

环境要求：Node.js 18 或更高版本。

```bash
git clone https://github.com/zhexingtianxia/zheye_media.git
cd zheye_media
npm install
npm run dev
```

启动后访问 [http://localhost:3000](http://localhost:3000)。

常用命令：

```bash
npm run dev      # 启动开发环境
npm run lint     # TypeScript 类型检查
npm run build    # 构建生产版本
npm run preview  # 本地预览生产构建
```

## Docker 部署

```bash
docker compose up -d --build
```

默认映射到本机 `8080` 端口，访问 `http://localhost:8080` 即可。更详细的步骤见 [README-DOCKER.md](./README-DOCKER.md)。

## 项目结构

```text
src/
├── components/      # 导航、首屏、服务、关于我们、页脚等组件
├── pages/           # 首页、案例列表、案例详情、联系我们
├── App.tsx          # 页面路由
└── index.css        # 全局样式
public/              # 品牌 Logo、合作品牌与案例图片
Dockerfile           # 生产镜像构建
docker-compose.yml   # 容器编排
nginx.conf           # Nginx 配置
```

## 内容维护

- 首页业务与品牌文案：`src/components/`、`src/pages/Home.tsx`
- 案例分类与封面：`src/pages/Cases.tsx`
- 案例详情与图片清单：`src/pages/CaseDetail.tsx`
- 联系方式与二维码：`src/pages/Contact.tsx`、`src/components/Footer.tsx`
- 图片素材：`public/`

更新案例时，请将压缩后的图片放入 `public/`，再同步修改案例列表和详情页中的图片路径。提交前建议执行 `npm run lint` 与 `npm run build`，确认类型检查和生产构建均通过。

---

<div align="center">
  河南喆也文化传媒有限公司 · 做最懂内容的新媒体服务商
</div>
