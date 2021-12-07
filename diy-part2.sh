#!/bin/bash
#
# Copyright (c) 2019-2020 P3TERX <https://p3terx.com>
#
# This is free software, licensed under the MIT License.
# See /LICENSE for more information.
#
# https://github.com/P3TERX/Actions-OpenWrt
# File name: diy-part2.sh
# Description: OpenWrt DIY script part 2 (After Update feeds)
#

# Modify default IP
#sed -i 's/192.168.1.1/192.168.50.5/g' package/base-files/files/bin/config_generate
sed -i 's/192.168.1.1/10.168.1.1/g' package/base-files/files/bin/config_generate

sed -i '/luci-app-ssr-plus/d;/luci-app-vsftpd/d' include/target.mk

# dnsmasq with chnroute
# wget --no-check-certificate https://raw.githubusercontent.com/muziling/dnsmasq-chnroute/master/0000-Add-feature-to-support-chnroutes.patch -P package/network/services/dnsmasq/patches

#chinadns-ng-op
git clone https://github.com/kalagxw/openwrt-chinadns-ng.git package/chinadns-ng

#udp2raw
git clone https://github.com/kalagxw/openwrt-udp2raw.git package/udp2raw
git clone https://github.com/wangyu-/luci-app-udp2raw package/luci-app-udp2raw

