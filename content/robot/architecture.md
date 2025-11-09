# Robot Architecture · 27570 BEAR DECODE Platform

## Mechanical
采用对称模块化底盘 + 两级差速滑轨。驱动系统兼容高、低位的抓取臂，方便在 90 分钟内完成维护与更换。

## Electrical
双层配电板 + 快拆式线束槽。主控采用 REV Control Hub，辅以扩展板进行 GPIO 与传感器冗余设计。

## Software
基于 Road Runner + 自研路径生成器，结合状态机管理不同任务（巡线、抓取、送分）。所有配置通过 JSON 表维护，可在 Pit 快速切换。

## Vision
前置与侧置 AprilTag 摄像头 + 深度估计模型，融合 IMU/里程计完成全场定位。提供虚拟仿真数据便于调参。
