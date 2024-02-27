# 如何保持 fork 的代码最新

## 自动更新
> 如果你遇到了 Upstream Sync 执行错误，请手动 Sync Fork 一次！


当你 fork 项目之后，由于 Github 的限制，需要手动去你 fork 后的项目的 Actions 页面启用 Workflows，并启用 Upstream Sync Action，启用之后即可开启每天时定时自动更新：

1. 点击进入 Action Tab  
2. 点击绿色 “I understand my workflows, go ahead and enable them” 按钮，启用 Workflows  
3. 点击 Upstream Sync Enable workflow 按钮，启用 Upstream Sync Action

启用之后，你 fork 的项目会在每天的 00:00 自动更新代码。


## 手动更新代码
如果你想让手动立即更新，可以查看 [Github 的文档](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) 了解如何让 fork 的项目与上游代码同步。

你可以 star/watch 本项目或者 follow 作者来及时获得新功能更新通知。
