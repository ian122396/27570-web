SHELL := powershell.exe
.SHELLFLAGS := -NoLogo -Command

.PHONY: dev build preview

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview
