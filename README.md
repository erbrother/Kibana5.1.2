
# Kibana环境搭建



1.下载Kibana压缩包(版本5.1.2)

2.安装Node(版本v6.0.0以上)[node](https://nodejs.org/en/),并将Node配置到全局

	--验证node是否安装成功

		node -v

		v6.9.2(安装成功)

3.安装Kibana依赖项

	npm install

	若安装太慢可使用淘宝镜像:

	npm install -g cnpm --registry=https://registry.npm.taobao.org

	安装成功后再使用

	cnpm install



4安装成功后进入kibana工程目录下的bin输入

	/bin/kibana/

完成后在浏览器中打开("localhost:9200")
