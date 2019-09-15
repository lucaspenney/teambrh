DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

docker run -p 8069:80 \
	--mount source=teambrh_volume,target=/var/www/teambrh/data \
	-v $DIR:/var/www/teambrh \
 teambrh