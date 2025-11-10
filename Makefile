SHELL := powershell.exe
.SHELLFLAGS := -NoLogo -Command

.PHONY: dev build preview

dev:
	npm run dev -- --host 0.0.0.0 --port 5173

build:
	npm run build

preview:
	npm run preview -- --host 0.0.0.0 --port 4173
