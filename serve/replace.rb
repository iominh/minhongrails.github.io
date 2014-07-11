#!/bin/ruby
# Replaces <pre> with <pre class="prettyprint"> for all files in a directory

def proc_file(fname) 
	text = File.read(fname)
	newText = text.gsub(/<pre>/, '<pre class="prettyprint">')
	File.open(fname, "w") {|file| file.puts newText}
	puts "Processed " + fname
end

def proc_dir(dir)
	Dir[dir].each do |fname|
	  next if fname == '.' or fname == '..'
	  next if !fname.include? ".md" and !fname.include? ".html"
	  proc_file(fname)
	end
end

proc_dir("_posts/*")

