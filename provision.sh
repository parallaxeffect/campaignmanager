apt-get update
apt-get install -y curl
curl -sL https://deb.nodesource.com/setup_6.x | sh
apt-get install -y nodejs

# Create sym-link so node_modules aren't shared to host
mkdir node_modules
cd /vagrant
ln -s /home/vagrant/node_modules node_modules