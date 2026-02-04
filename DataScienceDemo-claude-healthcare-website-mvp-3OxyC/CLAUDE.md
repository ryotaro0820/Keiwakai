# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

DataScienceDemo is a repository for AI-driven development and data science projects.

## Repository Structure

This repository is currently in its initial stage with minimal files. As the project grows, expect additions of:
- Python scripts or Jupyter notebooks for data analysis
- Data files or references to external datasets
- Machine learning models and experiments
- Documentation and analysis results

## Development Workflow

This repository uses a branch-based workflow:
- `main` branch: stable, production-ready code
- `develop` branch: active development branch
- Feature branches: created from `develop` for specific tasks

When making changes:
1. Create a new branch from `develop`
2. Make changes and commit
3. Push to GitHub
4. Create a pull request to merge into `develop`
5. After review, merge the PR
6. Periodically merge `develop` into `main` for releases

## Notes

- `notes.txt` contains project goals and development notes
- This is a fork of `dsotkazu/DataScienceDemo` with upstream tracking configured
